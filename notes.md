## DATABASE TRANSACTION
* In real life situation,we might need to ececute a series of queries in order ro acomplish a task
* we might do a club of CRUD Operation
* these series of operations can excecute a single unit of work and hence these series of operations are called a DB transactions.
* now during the transaction execution our db might go through a lot of changes and can be in an inconsistent intermediate state.