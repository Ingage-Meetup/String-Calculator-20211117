
# String Calculator - An Incremental TDD Kata

A TDD kata where you create a simple string calculator

## Before you start

* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata
* Test First!

## String Calculator


### Step 1

Create a simple String calculator with a method signature:

 > `int Add(string numbers)`

The method can take up to two numbers, separated by commas, and will return their sum.

For example `“”` or `“1”` or `“1,2”` as inputs.

For an empty string the method will return 0.

### Step 2

Allow the Add method to handle any number of integers.

### Step 3

Allow the Add method to handle new lines between numbers (instead of commas):

The following input is ok: `“1\n2,3”` (will equal 6)

The following input is NOT ok: `“1,\n”` (not need to prove it - just clarifying)

### Step 4

Calling Add with a negative number will throw an exception `“negatives not allowed”`.

Show the offending negative in the exception message. If there are multiple negatives, show all of them.

### Step 5

Numbers greater than 1000 should be ignored. For example, an input of `2,1001` results in an output of `2`.

### Step 6

Extend your calculator to handle subtraction. Assume the same requirements as additions (steps 1-5).

### Step 7

Extend your calculator to handle multiplication. Assume the same requirements as additions (steps 1-5).

### Step 8

Extend your calculator to handle division. Assume the same requirements as additions (steps 1-5).
