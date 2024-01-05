## DATABASE TRANSACTION
* In real life situation,we might need to ececute a series of queries in order ro acomplish a task
* we might do a club of CRUD Operation
* these series of operations can excecute a single unit of work and hence these series of operations are called a DB transactions.
* now during the transaction execution our db might go through a lot of changes and can be in an inconsistent intermediate state. 

## ACID properties
* Atomacity
* Consistency
* Isolation
* Durability

## ATOMICITY
* A transaction is a handle of statements that in tends to achieve one final state. Either when we are attempting a transaction, we either want to complete all the statements or none of them. we never want an intermediate state this is called a atomicity. 
* STATES: -> Begin-- when transaction just start
          -> Commit-- all the changes are applied successfully
          -> Rollback-- something happened in between and then whatever changes were successfull will be reverted.

* transaction is nothing but a set of read and write

## ISOLATION 
* it is ability of multiple transactions to execute without interfering with one another

## DURABILITY
* if something change in db or any unforseen circumstances happened then our changes should persist.

## What databases ensures atomicity?
* LOGGING: DBMS logs all actions that it is doing so that later it can undo 
* SHADOW LAGING: DBMS makes copies of actions this copy is initially considered as a temperary copy. If this succeeds thrn it starts pointing to the new temperary copy.4

## Atomicity for MYSQL:
* after ends commit or rollback,database remains in a consistent states.
* in order to handle rollback, two rollback are Undo log and Redo log
 - Undo Log:- this log contains recordes about how to undo the last change done by a transaction. If any other transaction need the original data as a part of consistent read operation,the unmodified data is retrived from undo logs.
 - Redo Log:- by defination,the redo log is a disk based data structure used for crash recovery to correct data written by incomplete transaction,the changes which could make it upon the files begore the crash on any other reasons are replayed automatically during restart of server after crash.

## Concurrency Problems
* Dirty Read
* Phantom Read
* Non-repeatable read

## Isolation Level
* Read uncommitted- Dirty read is possible
* Read committed
* Repeatable Read
* Serializable- it completely isolates the effect of one transaction from other. it is REPEATABLE READ will more isolation to avoid Phantom read.

## Durability
* the DB should be durable enough to hold all the latest updates even if system fails or restarts, if a transaction updates a chunk of data in database and commits the db will hold the new data, if transaction commit but system fails before data could be written then data should be written back when system restarts.

## Consistency
* consistency is innoDB involves protecting data from crash and main data integrity and consistency 
 - Double write buffer- it is a storage area where InnoDB writes pages flushed from buffer pool before writting the pages to the position in data files. if a system crashes, in middle of a page write, InnoDB can fed a good copy from double write buffer.
 - Crash Recovery-logs
* Pages
* Flush

## HOW DB ENSURES ATOMICITY??
* Logging
 - DBMS logs all actions that it is doing so that later it can undo
 - Black box 
* Shadow Logging
 - DBMS makes copies of actions this copy is initially considered as a temp copy. if transacton succeeds then it starts pointing to the new temp copy.

## How to handle rollbacks
* Undo log
 - This log contains records about how to undo the last change done by a transaction, if any other transaction need the original data as a part of a consistent read operation, the unmodified data is retrieved from undo logs.
* Redo log
 - by defination, the redo log is a disk based data structure used frio crash recovery to correct data written by incomplete transaction. the changes which could maje it upto the data files before the crash or any
 other reason are replayed automatically during restart of server often crash. 

## Locking mechanism avoid race condition
* shared lock
* exclusive lock
* content lock
* row-level lock

## Mysql is MVCC(Multi Version Concurrency Control)
- compatible to allow multiple transaction to read and write to same data.

* Cron jobs are scheduled at recurring intervals,specified using a format based on unix-cron.

## Idempotency->
* it is a property of certain operators in maths and CS where they can be applied multiple times changing the result beyond first application.
* a idempotency key is used. this key is sent with request header.
* if idempotency key is present then request not procceed otherwise it is procced and the key is stored for future purpose. 

