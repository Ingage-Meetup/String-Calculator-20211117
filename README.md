# String Calculator - An Incremental TDD Kata
A TDD kata where you create a simple string calculator

## Before you start:

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

Support different delimiters:

To change a delimiter, the beginning of the string will contain a separate line that looks like this: 

>`“//[delimiter]\n[numbers…]”` 

For example `“//;\n1;2”` should return three where the delimiter is `‘;’`.

All existing scenarios should still be supported.

### Step 5

Calling Add with a negative number will throw an exception `“negatives not allowed”`.

Show the offending negative in the exception message. If there are multiple negatives, show all of them.

### Step 6

Numbers greater than 1000 should be ignored. For example, an input of `2,1001` results in an output of `2`.

### Step 7

Delimiters can be of any length with the following format:

>`“//[delimiter]\n”` 

For example: `“//[***]\n1***2***3”` should return 6.

### Step 8

Allow multiple delimiters like this:

`//[delim1][delim2]\n` 

For example `//[*][%]\n1*2%3` should return 6.

### Step 9

Make sure you can also handle multiple delimiters with length longer than one character.

For example, `//[**][%%]\n1**2%%3` == 6.
