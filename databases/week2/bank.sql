CREATE DATABASE ER;

SET NAMES utf8mb4;

/*
Customer has a many-to-many relationship with Loan through the CustomerLoan linking table.
Customer has a many-to-many relationship with Account through the CustomerAccount linking table.
Loan has a many-to-one relationship with Bank.
Bank has a one-to-many relationship with Branch.
Branch has a one-to-many relationship with Employee.
Account has a one-to-many relationship with Transaction.
*/

CREATE TABLE Bank (
    BankID INT PRIMARY KEY,
    BankName VARCHAR(50),
    BankAddress VARCHAR(100)
);

CREATE TABLE Branch (
    BranchID INT PRIMARY KEY,
    BranchName VARCHAR(50),
    BranchAddress VARCHAR(100),
    BankID INT,
    FOREIGN KEY (BankID) REFERENCES Bank (BankID)
);

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    Address VARCHAR(100),
    PhoneNumber VARCHAR(15),
    Email VARCHAR(50)
);

CREATE TABLE Account (
    AccountID INT PRIMARY KEY,
    AccountNumber VARCHAR(20),
    AccountType VARCHAR(20),
    Balance DECIMAL(15, 2),
    DateOpened DATE
);

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Position VARCHAR(50),
    Salary DECIMAL(10, 2),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch (BranchID)
);

CREATE TABLE CustomerAccount (
    CustomerID INT,
    AccountID INT,
    PRIMARY KEY (CustomerID, AccountID),
    FOREIGN KEY (CustomerID) REFERENCES Customer (CustomerID),
    FOREIGN KEY (AccountID) REFERENCES Account (AccountID)
);

CREATE TABLE Loan (
    LoanID INT PRIMARY KEY,
    LoanType VARCHAR(20),
    LoanAmount DECIMAL(15, 2),
    InterestRate DECIMAL(5, 2),
    StartDate DATE,
    EndDate DATE,
    BankID INT,
    FOREIGN KEY (BankID) REFERENCES Bank (BankID)
);

CREATE TABLE CustomerLoan (
    CustomerID INT,
    LoanID INT,
    PRIMARY KEY (CustomerID, LoanID),
    FOREIGN KEY (CustomerID) REFERENCES Customer (CustomerID),
    FOREIGN KEY (LoanID) REFERENCES Loan (LoanID)
);

CREATE TABLE Transaction (
    TransactionID INT PRIMARY KEY,
    TransactionDate DATE,
    Amount DECIMAL(10, 2),
    TransactionType VARCHAR(20),
    Description VARCHAR(100),
    AccountID INT,
    BranchID INT,
    EmployeeID INT,
    FOREIGN KEY (AccountID) REFERENCES Account (AccountID),
    FOREIGN KEY (BranchID) REFERENCES Branch (BranchID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee (EmployeeID)
);

INSERT INTO
    Bank (BankID, BankName, BankAddress)
VALUES (
        1,
        'Jysk Bank',
        '123 Kongens Nytrov'
    ),
    (
        2,
        'National Bank',
        '456 Nybrovej, Gentofte'
    );

INSERT INTO
    Branch (
        BranchID,
        BranchName,
        BranchAddress,
        BankID
    )
VALUES (
        1,
        'Main Branch',
        '789 Glostrup, Zealand',
        1
    ),
    (
        2,
        'Downtown Branch',
        '101 Central CPH, Herlev',
        1
    ),
    (
        3,
        'Uptown Branch',
        'Njalsgade, Gotham',
        2
    );

INSERT INTO
    Customer (
        CustomerID,
        FirstName,
        LastName,
        DateOfBirth,
        Address,
        PhoneNumber,
        Email
    )
VALUES (
        1,
        'Alisha',
        'Joseph',
        '1997-07-14',
        '123 Bellerup, Zealand',
        '555-1234',
        'alisha.joseph@example.com'
    ),
    (
        2,
        'Jons',
        'Smith',
        '1990-02-10',
        '456 Dybbøsbro St, Gotham',
        '555-5678',
        'jons.smith@example.com'
    ),
    (
        3,
        'Lars',
        'Mathew',
        '1975-11-20',
        '789 Pine St,Lynge',
        '555-8765',
        'lars.mathew@example.com'
    );

INSERT INTO
    Account (
        AccountID,
        AccountNumber,
        AccountType,
        Balance,
        DateOpened
    )
VALUES (
        1,
        'ACC1001',
        'Savings',
        15000.00,
        '2020-01-15'
    ),
    (
        2,
        'ACC1002',
        'Checking',
        5000.00,
        '2021-06-20'
    ),
    (
        3,
        'ACC1003',
        'Savings',
        25000.00,
        '2019-09-10'
    );

INSERT INTO
    CustomerAccount (CustomerID, AccountID)
VALUES (1, 1),
    (1, 3),
    (2, 2),
    (3, 3);

INSERT INTO
    Employee (
        EmployeeID,
        FirstName,
        LastName,
        Position,
        Salary,
        BranchID
    )
VALUES (
        1,
        'Peter',
        'Parker',
        'Manager',
        60000.00,
        1
    ),
    (
        2,
        'Walter',
        'Kent',
        'Teller',
        40000.00,
        2
    ),
    (
        3,
        'Larissa',
        'Wayne',
        'Branch Manager',
        75000.00,
        3
    );

INSERT INTO
    Loan (
        LoanID,
        LoanType,
        LoanAmount,
        InterestRate,
        StartDate,
        EndDate,
        BankID
    )
VALUES (
        1,
        'Mortgage',
        200000.00,
        3.5,
        '2020-03-01',
        '2042-03-01',
        1
    ),
    (
        2,
        'Auto',
        25000.00,
        4.0,
        '2023-05-15',
        '2028-05-15',
        2
    ),
    (
        3,
        'Personal',
        10000.00,
        5.5,
        '2021-07-20',
        '2026-07-20',
        1
    );

INSERT INTO
    CustomerLoan (CustomerID, LoanID)
VALUES (1, 1),
    (2, 2),
    (3, 3),
    (1, 3);

INSERT INTO
    Transaction (
        TransactionID,
        TransactionDate,
        Amount,
        TransactionType,
        Description,
        AccountID,
        BranchID,
        EmployeeID
    )
VALUES (
        1,
        '2024-01-15',
        1000.00,
        'Deposit',
        'Salary deposit',
        1,
        1,
        2
    ),
    (
        2,
        '2024-01-20',
        500.00,
        'Withdrawal',
        'ATM withdrawal',
        2,
        2,
        2
    ),
    (
        3,
        '2024-02-01',
        250.00,
        'Deposit',
        'Gift deposit',
        3,
        1,
        1
    ),
    (
        4,
        '2024-02-05',
        100.00,
        'Withdrawal',
        'Online payment',
        1,
        1,
        1
    );