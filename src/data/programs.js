export const programsData = {
    Numbers: [
      {
        id: "N1",
        name: "1. Write a program to reverse an integer in Python.",
        code: `
  n = int(input("Please enter a number: "))
  print("Before reverse:", n)
  reverse = 0
  while n != 0:
      reverse = reverse * 10 + n % 10
      n = n // 10
  print("After reverse:", reverse)
        `,
        output: `Please enter a number: 5642
Before reverse: 5642
After reverse: 2456`,
        explanation: `This code prompts the user to enter a number and stores it in the variable n. It first prints the original number n. Then, it initializes a variable reverse to 0 and uses a while loop to reverse the digits of the number. In the loop, it extracts the last digit of n and adds it to reverse after shifting its existing digits. Simultaneously, n is updated by removing its last digit through integer division by 10. The process continues until n becomes zero. Finally, the reversed number is printed.`,
      },
      {
        id: "N2",
        name: "2. Write a program in Python to check whether an integer is Armstrong number or not.",
        code: `
  i = 0
  result = 0
  n = int(input("Please enter a number: "))
  number1 = n
  temp = n
  while n != 0:
      n = n // 10
      i += 1
  while number1 != 0:
      n = number1 % 10
      result += pow(n, i)
      number1 = number1 // 10
  if temp == result:
      print("The number is an Armstrong number")
  else:
      print("The number is not an Armstrong number")
        `,
        output: `Please enter a number: 245
The number is not an Armstrong number`,
        explanation: `This code checks if a number is an Armstrong number. It first counts the number of digits in the input n using a while loop. Then, it calculates the sum of each digit of n raised to the power of the number of digits. If the original number equals this calculated sum, it prints that the number is an Armstrong number; otherwise, it prints that it is not.`,
      },
      {
        id: "N3",
        name: "3. Write a program in Python to check given number is prime or not.",
        code: `temp = 0
n = int(input("Please enter a number: "))
for i in range(2, n//2):
    if n % i == 0:
        temp = 1
        break
if temp == 1:
    print("The given number is not a prime number")
else:
    print("The given number is a prime number"`,
        output: `Please enter a number: 7
The given number is a prime number`,
        explanation: `This code checks whether a given number is a prime number. The user inputs a number, which is stored in n. The program then uses a for loop to check if any number between 2 and n//2 divides n evenly (i.e., no remainder). If such a divisor is found, the variable temp is set to 1, and the loop breaks, indicating the number is not prime. After the loop, if temp is 1, it prints "The given number is not a prime number"; otherwise, it prints "The given number is a prime number." Note that the variable temp must be initialized before the loop to avoid errors.
`,
      },
      {
        id: "N4",
        name: "4.Write a program in Python to print the Fibonacci series using iterative method.",
        code: `first, second = 0, 1
n = int(input("Please enter a number to generate the Fibonacci series: "))
print("The Fibonacci series is:")
for i in range(0, n):
    if i <= 1:
        result = i
    else:
        result = first + second
        first = second
        second = result
    print(result)`,
        output: `Please enter a number to generate the Fibonacci series: 7
The Fibonacci series is:
0
1
1
2
3
5
8`,
        explanation: `This code generates the Fibonacci series up to a given number of terms. The user is prompted to input a number n, which represents how many terms of the Fibonacci series to generate. The code uses a for loop that runs from 0 to n-1. For the first two terms (when i is 0 or 1), the result is simply i. For the rest of the terms, the code calculates the sum of the two previous terms (stored in first and second) and updates them accordingly. However, the variables first and second are not initialized before use, so the code will raise an error unless these variables are set to 0 and 1 initially. After computing each term, the result is printed, showing the Fibonacci sequence up to the nth term.`,
      },
      {
        id: "N5",
        name: "5. Write a program in Python to print the Fibonacci series using recursive method.",
        code: `def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fibonacci(num-1) + fibonacci(num-2)
n = int(input("Please enter a number to generate the Fibonacci series: "))
print("The Fibonacci series is:")
for i in range(0, n):
    print(fibonacci(i))`,
        output: `Please enter a number to generate the Fibonacci series: 5
The Fibonacci series is:
0
1
1
2
3`,
        explanation: `This code defines a recursive function called fibonacci(num) that generates the Fibonacci number at a given position. The function works by checking if num is 0 or 1, in which case it returns 0 and 1 respectively. For any other number, the function calls itself recursively to calculate the Fibonacci number by summing the results of fibonacci(num-1) and fibonacci(num-2). The user is prompted to enter a number n, which specifies how many terms of the Fibonacci series to generate. A for loop runs from 0 to n-1, calling the fibonacci(i) function to print the Fibonacci numbers one by one. This method is simple but inefficient for larger values of n, as it involves repeated calculations due to the recursive nature of the function.`,
      },
      {
        id: "N6",
        name: "6. Write a program in Python to check whether a number is palindrome or not using iterative method.",
        code: `n = int(input("Please enter a number: "))
temp = n
# reverse the number
reverse = 0
while temp != 0:
    reverse = reverse * 10 + temp % 10
    temp = temp // 10
# check if the number is a palindrome
if reverse == n:
    print("The number is a palindrome.")
else:
    print("The number is not a palindrome.")`,
        output: `Please enter a number: 121
The number is a palindrome.`,
        explanation: `This code checks whether a given number is a palindrome. First, the user is prompted to enter a number, which is stored in n. A variable temp is initialized with the value of n, and another variable reverse is set to 0 to store the reversed number. The while loop reverses the digits of temp by repeatedly extracting the last digit (temp % 10) and appending it to reverse. After each iteration, temp is reduced by integer division (temp // 10). Once the number is reversed, the code checks if the reversed number (reverse) is equal to the original number (n). If they are equal, it prints "The number is a palindrome." Otherwise, it prints "The number is not a palindrome." This code effectively determines if the number reads the same forwards and backwards.`,
      },
      {
        id: "N7",
        name: "7. Write a program in Python to check whether a number is palindrome or not using recursive method.",
        code: `def reverse(num):
    if num < 10:
        return num
    else:
        return int(str(num % 10) + str(reverse(num // 10)))
def is_palindrome(num):
    if num == reverse(num):
        return True
    else:
        return False
n = int(input("Please enter a number: "))
if is_palindrome(n):
    print("The number is a palindrome.")
else:
    print("The number is not a palindrome.`,
        output: `Please enter a number: 535
The number is a palindrome.`,
        explanation: `This code checks if a number is a palindrome using recursion. It first defines a function reverse(num) that reverses the digits of a number. If the number is less than 10, it simply returns the number. Otherwise, it converts the last digit (num % 10) to a string and appends it to the reversed version of the remaining digits (reverse(num // 10)), effectively reversing the number recursively.

Next, the is_palindrome(num) function checks if the number is equal to its reversed version by calling the reverse(num) function. If the original number and the reversed number are the same, the function returns True, indicating the number is a palindrome; otherwise, it returns False.

The user is prompted to enter a number, and the program checks if the number is a palindrome using the is_palindrome(n) function. If the number is a palindrome, it prints "The number is a palindrome"; otherwise, it prints "The number is not a palindrome."`,
      },
      {
        id: "N8",
        name: "8. Write a program in Python to find greatest among three integers.",
        code: `n1 = int(input("Please enter the first number (n1): "))
n2 = int(input("Please enter the second number (n2): "))
n3 = int(input("Please enter the third number (n3): "))
if n1 >= n2 and n1 >= n3:
    print("n1 is the greatest")
elif n2 >= n1 and n2 >= n3:
    print("n2 is the greatest")
else:
    print("n3 is the greatest")`,
        output: `Please enter the first number: 20
Please enter the second number: 30
Please enter the third number: 10
n2 is the greatest`,
        explanation: `This code compares three numbers to determine which one is the greatest. First, it prompts the user to enter three numbers (n1, n2, n3). Then, using if-elif-else conditions, it checks which of the three numbers is the greatest. If n1 is greater than or equal to both n2 and n3, it prints "n1 is the greatest". If n2 is greater than or equal to both n1 and n3, it prints "n2 is the greatest". If neither of these conditions is true, it prints "n3 is the greatest".`,
      },
      {
        id: "N9",
        name: "9. Write a program in Python to check if a number is binary?",
        code: `def is_binary(num):
    while num > 0:
        digit = num % 10
        if digit not in [0, 1]:
            return False
        num = num // 10
    return True
num = int(input("Please enter a number: "))
if is_binary(num):
    print("The number is binary.")
else:
    print("The number is not binary.")`,
        output: `Please enter a number:12345
num is not binary`,
        explanation: `This code checks whether a given number is a binary number (i.e., contains only the digits 0 and 1). The function is_binary(num) works by repeatedly extracting the last digit of the number using num % 10. If any digit is not 0 or 1, the function returns False, indicating that the number is not binary. If all digits are either 0 or 1, the function returns True. The user is prompted to input a number, and the program calls the is_binary(num) function to check if the number is binary. If the number is binary, it prints "The number is binary"; otherwise, it prints "The number is not binary."`,
      },
      {
        id: "N10",
        name: "10. Write a program in Python to find sum of digits of a number using recursion?",
        code: `def sum_of_digits(num):
if num<10:
return num
else:
return (num%10) + sum_of_digits(num//10)
number = int(input("Enter a number: "))
print("Sum of digits of the number is: ", sum_of_digits(number))`,
        output: `Enter a number: 10
Sum of digits of the number is: 1`,
        explanation: `This code calculates the sum of digits of a given number using recursion. The function sum_of_digits(num) checks if the number is less than 10 (the base case). If it is, it simply returns the number itself. Otherwise, it calculates the sum of the last digit (num % 10) and recursively calls sum_of_digits with the number without its last digit (num // 10). This process continues until the number becomes less than 10. The user is prompted to input a number, and the program calls sum_of_digits(number) to compute and print the sum of its digits.`,
      },
      {
        id: "N11",
        name: "11. Write a program in Python to swap two numbers without using third variable?",
        code: `a = int(input("please give first number a: "))
b = int(input("please give second number b: "))
a=a-b
b=a+b
a=b-a
print("After swapping")
print("value of a is : ", a);
print("value of b is : ", b); `,
        output: `After swapping
value of a is : 7
value of b is : 5`,
        explanation: `This code swaps the values of two numbers, a and b, without using a temporary variable. First, the user is prompted to enter the values for a and b. The swapping process begins with the expression a = a - b, which calculates the difference between a and b and assigns it to a. Next, b = a + b updates b to hold the original value of a, since a now contains the difference between a and b. Finally, a = b - a retrieves the original value of b by subtracting the current value of a (the difference) from b. After the swapping process is complete, the program prints the new values of a and b, showing that the two numbers have been successfully swapped. This method leverages simple arithmetic operations to perform the swap efficiently.`,
      },
      {
        id: "N12",
        name: "12. Write a program in Python to swap two numbers using third variable?",
        code: `a = int(input("please give first number a: "))
b = int(input("please give second number b: "))
tempvar=a
a=b
b=tempvar
print("After swapping")
print("value of a is : ", a);
print("value of b is : ", b); `,
        output: `After swapping
value of a is : 20
value of b is : 10`,
        explanation: `This code swaps the values of two numbers, a and b, using a temporary variable tempvar. The user is first prompted to input the values for a and b. The swapping process is done in three steps: First, the value of a is stored in the temporary variable tempvar. Then, the value of b is assigned to a, effectively replacing a with the value of b. Finally, the value of tempvar (which holds the original value of a) is assigned to b, completing the swap. After the swap, the program prints the new values of a and b, showing that the two numbers have been successfully swapped.`,
      },
      {
        id: "N13",
        name: "13. Write a program in Python to find prime factors of a given integer.",
        code: `def prime_factors(num):
i = 2
factors = []
while i * i <= num:
if num % i:
i += 1
else:
num //= i
factors.append(i)
if num > 1:
factors.append(num)
return factors
num = int(input("Enter a number: "))
result = prime_factors(num)
print("The prime factors of", num, "are: ", result)`,
        output: `Enter a number: 20
The prime factors of 20 are: [2, 2, 5].`,
        explanation: `This code defines a function prime_factors(num) that computes the prime factors of a given number num. The function works by starting with the smallest prime number, 2, and repeatedly checks if i divides num. If num is divisible by i (i.e., num % i == 0), i is added to the list of factors, and num is divided by i. This continues until i * i exceeds num. If num is greater than 1 after the loop, it means num itself is a prime factor, and it is added to the list of factors. The user is prompted to input a number, and the function prime_factors(num) is called to calculate and print the prime factors of the number.`,
      },
      {
        id: "N14",
        name: "14. Write a program in Python to add two integer without using arithmetic operator?",
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] arg) {
        int x, y;
        Scanner sc = new Scanner(System.in);
        System.out.print("Please give first number: ");
        x = sc.nextInt();
        System.out.print("Please give second number: ");
        y = sc.nextInt();
        while (y != 0) {
            int temp = x & y;
            x = x ^ y;
            y = temp << 1;
        }
        System.out.println("Sum = " + x);
    }`,
        output: `Please give first number: 20
Please give second number: 10
Sum = 30;`,
        explanation: `This Java program calculates the sum of two numbers without using the addition operator (+), relying instead on bitwise operations. First, the user is prompted to input two numbers, x and y. The program then enters a while loop that continues until there are no more carries left (y == 0). Inside the loop, the carry is calculated using a bitwise AND (&) operation between x and y, and stored in temp. The sum without the carry is obtained by performing a bitwise XOR (^) on x and y, which is then assigned to x. The carry is shifted left by one position using a left shift (<<), and stored back in y. This process repeats until the carry becomes zero. Finally, the result, which is the sum of the two numbers, is printed. This method mimics the process used in digital circuits to perform addition through bitwise operations, making it an efficient approach for calculating sums without traditional arithmetic.`,
      },
      {
        id: "N15",
        name: "15. Write a program in Python to find given number is perfect or not?",
        code: `num = int(input("please give first number a: "))
sum=0
for i in range(1,(num//2)+1):
    remainder = num % i
    if remainder == 0:
        sum = sum + i
if sum == num:
    print("given no. is perfect number")
else:
    print("given no. is not a perfect number") `,
        output: `please give first number a: 6
given no. is perfect number
please give first number a: 8
given no. is not a perfect number`,
        explanation: `This Python program checks whether a given number is a perfect number. A perfect number is defined as a number that is equal to the sum of its proper divisors (excluding the number itself). The program starts by prompting the user to enter a number (num). It then initializes a variable sum to 0, which will hold the sum of the divisors of the number. Using a for loop, the program checks all numbers from 1 to num // 2 + 1 to see if they divide the input number without leaving a remainder (i.e., num % i == 0). If a divisor is found, it is added to the sum. After the loop finishes, the program compares the sum of the divisors to the original number. If the sum is equal to the number, it prints that the number is a perfect number; otherwise, it prints that the number is not a perfect number.`,
      },
      {
        id: "N16",
        name: "16. Python Program to find the Average of numbers with explanations",
        code: `size=int(input("Enter the number of elements you want in array: "))
arr=[]
#taking input of the list
for i in range(0,size):
    elem=int(input("Please give value for index "+str(i)+": "))
    arr.append(elem)
#taking average of the elements of the list
avg=sum(arr)/size
print("Average of the array elements is ",avg)`,
        output: `Enter the number of elements you want in array: 3
Please give value for index 0:10
Please give value for index 1:20
Please give value for index 2:30
Average of the array elements is 20.0`,
        explanation: `This Python code calculates the average of the elements in an array. The program begins by asking the user to input the size of the array. It then initializes an empty list arr and uses a for loop to take input for each element of the array, appending each value to the list. After the list is populated with the user's input, the program calculates the average of the array elements by dividing the sum of all elements (sum(arr)) by the size of the array (size). Finally, it prints the calculated average.`,
      },
      {
        id: "N17",
        name: "17. Python Program to calculate factorial using iterative method.",
        code: `def factorial(n):
    fact = 1
    for i in range(1, n+1):
        fact = fact * i
    return fact

num = int(input("Enter a number: "))
result = factorial(num)
print("The factorial of", num, "is", result)`,
        output: `Enter a number: 5
The factorial of 5 is 120`,
        explanation: `This Python program calculates the factorial of a given number using a for loop. The program defines a function factorial(n), which calculates the factorial by initializing a variable fact to 1. The for loop runs from 1 to n, multiplying the current value of fact by the loop variable i in each iteration. After the loop completes, the fact variable contains the factorial of n, which is then returned. The program prompts the user to input a number (num), calls the factorial function with that number, and prints the result, showing the factorial of the entered number.`,
      },
      {
        id: "N18",
        name: "18. Python Program to calculate factorial using recursion.",
        code: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
num = int(input("Enter a number: "))
print("The factorial of", num, "is", factorial(num))`,
        output: `Enter the number: 6
The factorial of 6 is 720`,
        explanation: `This Python program calculates the factorial of a given number using recursion. A factorial is the product of all positive integers less than or equal to a given number n. The function factorial(n) is defined recursively: if n is 0, the function returns 1 (since the factorial of 0 is defined as 1). Otherwise, it multiplies n by the result of calling factorial(n-1), which keeps breaking the problem down until it reaches 0. The program prompts the user to input a number (num), calls the factorial function with that number, and prints the calculated factorial.`,
      },
      {
        id: "N19",
        name: "19.Python Program to check a given number is even or odd.",
        code: `def even_odd(num):
    if num % 2 == 0:
        return "The number is Even"
    else:
        return "The number is Odd"
# Taking input from the user
num = int(input("Enter a number: "))
print(even_odd(num))`,
        output: `Enter a number: 5
The number is Odd`,
        explanation: `This Python program checks whether a given number is even or odd. The function even_odd(num) takes a number as input and checks if it is divisible by 2. If the number is divisible by 2 (i.e., num % 2 == 0), it returns the string "The number is Even", indicating that the number is even. Otherwise, it returns "The number is Odd", indicating that the number is odd. The program then prompts the user to input a number, calls the even_odd function with that number, and prints the result.`,
      },
      {
        id: "N20",
        name: "20. Python program to print first n Prime Number with explanation.",
        code: `def is_prime(num):
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                return Falseelse:
            return Trueelse:
        return Falsedef print_first_n_prime(n):
    prime_list = []
    count = 0
    num = 2while count < n:
        if is_prime(num):
            prime_list.append(num)
            count += 1
        num += 1return prime_list
n = int(input("Enter the value of n: "))
print("First", n, "prime numbers are:", print_first_n_prime(n))`,
        output: `Enter the value of n: 5
First 5 prime numbers are: [2, 3, 5, 7, 11]`,
        explanation: `This Python program is designed to find and print the first n prime numbers. It consists of two main functions. The first function, is_prime(num), checks whether a given number num is a prime number. It does this by checking if num is greater than 1, and then testing if it is divisible by any number from 2 to num-1. If num is divisible by any of these numbers, it returns False, meaning the number is not prime; otherwise, it returns True, indicating the number is prime. The second function, print_first_n_prime(n), generates a list of the first n prime numbers. It initializes an empty list prime_list and a counter count. Starting from 2, it checks each number to see if it is prime by calling the is_prime function. If the number is prime, it is added to the list and the counter is incremented. This process continues until n prime numbers have been found, and the list of primes is returned. The program prompts the user to input the value of n, and then prints the first n prime numbers.`,
      },
      {
        id: "N21",
        name: "21. Python Program to print Prime Number in a given range.",
        code: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def prime_in_range(lower, upper):
    primes = []
    for num in range(lower, upper + 1):
        if is_prime(num):
            primes.append(num)
    return primes
lower = int(input("Enter the lower range: "))
upper = int(input("Enter the upper range: "))
result = prime_in_range(lower, upper)
if result == []:
    print("No prime number found in the given range.")
else:
    print("Prime numbers in the given range:", result)`,
        output: `Enter the lower range: 10
Enter the upper range: 30
Prime numbers in the given range: [11, 13, 17, 19, 23, 29]`,
        explanation: `The is_prime(n) function checks if a given number n is prime. It first handles the edge case where n is less than 2, returning False because numbers less than 2 are not prime. Then, it uses a loop that checks if any number between 2 and the square root of n (inclusive) divides n evenly. If any number divides n without a remainder, the function returns False, indicating that n is not prime. Otherwise, it returns True, confirming that n is a prime number. The prime_in_range(lower, upper) function generates a list of all prime numbers within a specified range, from lower to upper (inclusive). It loops through each number in this range and calls is_prime(num) to check if the number is prime. If it is, the number is added to the primes list. Finally, the program prompts the user for the lower and upper bounds of the range, calls the prime_in_range function, and prints the list of prime numbers found within the range. If no primes are found, it prints a message indicating that no prime numbers exist within the given range.`,
      },
      {
        id: "N22",
        name: "22. Python Program to find Smallest number among three.",
        code: `def find_smallest(num1, num2, num3):
  smallest = num1
  if num2 < smallest:
    smallest = num2
  if num3 < smallest:
    smallest = num3
  return smallest
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
num3 = int(input("Enter the third number: "))
smallest = find_smallest(num1, num2, num3)
print("The smallest number is", smalles`,
        output: `Enter the first number: 25
Enter the second number: 12
Enter the third number: 36
The smallest number is 12`,
        explanation: `This Python program is designed to find the smallest number among three user-provided integers. It defines a function find_smallest(num1, num2, num3) that takes three numbers as input. The function first assumes that num1 is the smallest and stores it in the variable smallest. It then compares num2 and num3 with the current value of smallest, updating smallest if either of them is smaller. After determining the smallest number, the function returns it. The program then prompts the user to input three integers (num1, num2, and num3), calls the find_smallest function to find the smallest of the three numbers, and prints the result.`,
      },
      {
        id: "N23",
        name: "23. Python program to calculate the power using the POW method.",
        code: `# input the base and exponent
base = int(input("Enter the base number: "))
exponent = int(input("Enter the exponent: "))
# calculate the power using the pow method
result = pow(base, exponent)
# print the result
print("The result of {} raised to the power of {} is {}".format(base, exponent, result)`,
        output: `Enter the base number: 2
Enter the exponent: 3
The result of 2 raised to the power of 3 is 8`,
        explanation: `The program begins by prompting the user to input two numbers: the base and the exponent. The pow() function is then used to calculate the base raised to the power of the exponent. The result is stored in the variable result. The program then prints the result using Python's string formatting method format() to display the base, exponent, and the calculated result in a readable format. For example, if the user enters 2 as the base and 3 as the exponent, the program will calculate 2 raised to the power of 3, which equals 8.`,
      },
      {
        id: "N24",
        name: "24. Python Program to calculate the power without using POW function.(using for loop).",
        code: `#taking 3 integer as input from the user
base = int(input("Enter the value for base :"))
exponent = int(input("Enter the value for exponent :"))
result=1;
print("The result of ",base,"raised to the power of ",exponent," is ",end = ' ')
#using ‘for’ loop with ‘range’ function
for exponent in range(exponent, 0, -1):
    result *= base
print(result)`,
        output: `Enter the value for base : 5
Enter the value for exponent : 4
The result of 5 raised to the power of 4 is 625`,
        explanation: `The program starts by prompting the user to input the base and exponent values. It initializes a variable result to 1, as the starting value for multiplication. The for loop iterates from the exponent value down to 1, multiplying the result by the base during each iteration. This effectively calculates the base raised to the power of the exponent. The loop decreases the exponent by 1 on each iteration, ensuring that the correct number of multiplications are performed. Finally, the result is printed, showing the base raised to the power of the exponent.`,
      },
      {
        id: "N25",
        name: "25. Python Program to calculate the power without using POW function.(using while loop).",
        code: `base = int(input("Enter the value for base :"))
exponent = int(input("Enter the value for exponent :"))
result=1;
print(base,"to power ",exponent,"=",end = ' ')
#using while loop with a condition that come out of while loop if exponent is 0
while exponent != 0:
    result = base * result
    exponent-=1
print(result)`,
        output: `Enter the value for base : 5
Enter the value for exponent : 4
5 to power of 4 = 625`,
        explanation: `The program starts by prompting the user to input the base and exponent values. It initializes a variable result to 1, as the starting value for multiplication. The for loop iterates from the exponent value down to 1, multiplying the result by the base during each iteration. This effectively calculates the base raised to the power of the exponent. The loop decreases the exponent by 1 on each iteration, ensuring that the correct number of multiplications are performed. Finally, the result is printed, showing the base raised to the power of the exponent.`,
      },
      {
        id: "N26",
        name: "26. Python Program to calculate the square of a given number.",
        code: `#take input from the user
num = int(input("Enter a number to calculate square : "))
print("square =",num*num)`,
        output: `Enter a number to calculate square: 5
        square = 25
`,
        explanation: `The program begins by prompting the user to input a number (num). It then calculates the square of the number by multiplying it by itself (num * num). Finally, the program prints the result with the label "square =" to indicate that the output is the square of the input number. This simple program provides a straightforward way to calculate and display the square of a given number.`,
      },
      {
        id: "N27",
        name: "27. Python Program to calculate the cube of a given number.",
        code: `#take input from the user
num = int(input("Enter a number to calculate cube : "))
print("square =",num*num*num)`,
        output: `Enter a number to calculate cube: 4
        square = 64
`,
        explanation: `The program prompts the user to input a number (num) for which they want to calculate the cube. It then calculates the cube of the number by multiplying it by itself three times (num * num * num). Finally, it prints the result with the label "square =", though the correct label should be "cube =" as it's calculating the cube, not the square. This is a simple program that provides a way to calculate and display the cube of a given number.`,
      },
      {
        id: "N28",
        name: "28. Python Program to calculate the square root of a given number.",
        code: `import math
#take input from the user
num = int(input("Enter a number to find square root : "))
#check if the input number is negative
if num<0:
    print("Negative numbers can't have square roots")
else:
    print("square roots = ",math.sqrt(num))`,
        output: `Enter a number to find square root: 25
        square roots =  5.0
        
        Enter a number to find square root: -36
        Negative numbers can't have square roots
`,
        explanation: `The program starts by prompting the user to input a number (num). It then checks if the input number is negative. Since square roots of negative numbers are not real numbers (they result in complex numbers), the program prints a message stating "Negative numbers can't have square roots" if the input is negative. If the number is non-negative, the program calculates and prints the square root of the number using Python's math.sqrt() function, which is designed to return the square root of non-negative numbers.`,
      },
      {
        id: "N29",
        name: "29. Python program to calculate LCM of given two numbers.",
        code: `num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
if num1 > num2:
    greater = num1
else:
    greater = num2
while(True):
    if((greater % num1 == 0) and (greater % num2 == 0)):
        lcm = greater
        break
    greater += 1
print("LCM of",num1,"and",num2,"=",greater)`,
        output: `Enter first number: 4
Enter second number: 5
LCM of 4 and 5 = 20
`,
        explanation: `The program begins by taking two integer inputs, num1 and num2, from the user. It then determines the greater of the two numbers and initializes it as greater. The program enters a while loop that keeps incrementing greater by 1 until it finds a value that is divisible by both num1 and num2 (i.e., greater % num1 == 0 and greater % num2 == 0). This value is the LCM of the two numbers. Once found, the program prints the LCM of the two numbers.`,
      },
      {
        id: "N30",
        name: "30. Python Program to find GCD or HCF of two numbers.",
        code: `#taking two inputs from the user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
#checking for smaller number
if num1 > num2:
    minimum = num2
else:
    minimum = num1
#finding highest factor of the numbers
for i in range(1, minimum+1):
    if((num1 % i == 0) and (num2 % i == 0)):
        hcf = i
print("hcf/gcd of",num1,"and",num2,"=",hcf)`,
        output: ` For inputs 8 and 2, the program is finding the highest factor that is common in both 8 and 2.

The factor of 8 is 1,2,4,8 and the factor of 2 is 1,2. The highest factor common in both is 2.`,
        explanation: ``,
      },
      {
        id: "N31",
        name: "31. Python Program to find GCD of two numbers using recursion",
        code: `def gcd(num1,num2):
    if num2 == 0:
        return num1;
    return gcd(num2, num1 % num2)
#taking inputs from the user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print("hcf/gcd of",num1,"and",num2,"=",gcd(num1,num2))`,
        output: `Enter first number: 36
Enter second number: 60
hcf/gcd of 36 and 60 = 12`,
        explanation: `The program first takes two integer inputs, num1 and num2, from the user. It then checks which number is smaller and assigns it to the variable minimum, which will be used to limit the range for finding the common factors. The program then loops from 1 to minimum, checking each number to see if it divides both num1 and num2 evenly (i.e., both num1 % i == 0 and num2 % i == 0). If it does, the current value of i becomes the highest common factor (HCF). Finally, the program prints the result, which is the HCF of the two numbers.`,
      },
      {
        id: "N32",
        name: "32. Python Program to Convert Decimal Number into Binary.",
        code: `def DecimalToBinary(num):
    if num > 1:
        DecimalToBinary(num // 2)
    print(num % 2, end='')

# Main program
if __name__ == '__main__':
    dec_val = 35
    DecimalToBinary(dec_val)
`,
        output: `Decimal number: 35
100011
`,
        explanation: `The function DecimalToBinary(num) is defined to convert a given decimal number (num) into binary. It works recursively by dividing the number by 2 and calling itself with the quotient. The remainder of each division (num % 2) represents a bit of the binary number, and the function prints each bit in reverse order (from the most significant to the least significant bit). The function does not return any value; instead, it prints the bits directly. In the main part of the program, the decimal number 35 is passed to the function DecimalToBinary, which prints its binary equivalent.`,
      },
      {
        id: "N33",
        name: "33.Python Program to convert Decimal number to Octal number.",
        code: `def DecimalToOctal(n):
    # array to store octal number
    octal = [0] * 100
    # counter for octal digits
    i = 0
    # run until n is 0
    while (n != 0):
        # Storing Remainder in Octal Array
        octal[i] = n % 8
        # updating value of n to n/8
        n = int(n / 8)
        # Increasing the Counter
        i += 1
    # Traversing Octal Array in Reverse Order
    for j in range(i - 1, -1, -1):
        print(octal[j], end="")`,
        output: `Decimal number: 35
        41`,
        explanation: `The function DecimalToOctal(n) converts the decimal number n to octal. The function uses an array, octal, to store the octal digits and a counter i to keep track of the number of digits. It repeatedly divides the number n by 8, storing the remainder at each step in the octal array, and updating n to the quotient of the division (n // 8). The process continues until n becomes zero. Once the remainders are stored, the program prints the digits in reverse order, as the first remainder corresponds to the least significant digit of the octal number.`,
      },
      {
        id: "N34",
        name: "34. Python Program to check the given year is a leap year or not.",
        code: `# Default function to implement conditions to check leap year
def CheckLeap(Year):
  # Checking if the given year is leap year
  if((Year % 400 == 0) or
     (Year % 100 != 0) and
     (Year % 4 == 0)):
    print("Given Year is a leap Year");
  # Else it is not a leap year
  else:
    print ("Given Year is not a leap Year")
# Taking an input year from user
Year = int(input("Enter the number: "))
# Printing result
CheckLeap(Year)  `,
        output: `Enter the number: 1700
Given year is not a leap Year`,
        explanation: `The CheckLeap(Year) function determines if a given year is a leap year using the standard leap year rules:

A year is a leap year if it is divisible by 400, or
It is divisible by 4 but not divisible by 100. If the year meets any of these conditions, it is a leap year, and the function prints "Given Year is a leap Year." If it doesn't meet these conditions, it prints "Given Year is not a leap Year." The user is prompted to enter a year, and the function is called with that input to check if it is a leap year.`,
      },
      {
        id: "N35",
        name: "35. Python Program to convert Celsius to Fahrenheit.",
        code: `celsius_1 = float(input("Temperature value in degree Celsius: " ))
# For Converting the temperature to degree Fahrenheit by using the above
# given formula
Fahrenheit_1 = (celsius_1 * 1.8) + 32
# print the result
print('The %.2f degree Celsius is equal to: %.2f Fahrenheit'
      %(celsius_1, Fahrenheit_1))
print("----OR----")
celsius_2 = float (input("Temperature value in degree Celsius: " ))
Fahrenheit_2 = (celsius_2 * 9/5) + 32
# print the result
print ('The %.2f degree Celsius is equal to: %.2f Fahrenheit'
      %(celsius_2, Fahrenheit_2)) `,
        output: `Temperature value in degree Celsius:  34
The 34.00 degree Celsius is equal to: 93.20 Fahrenheit
----OR----
Temperature value in degree Celsius:  23
The 23.00 degree Celsius is equal to: 73.40 Fahrenheit`,
        explanation: `The program takes two inputs from the user: the temperature in Celsius. It then calculates the equivalent temperature in Fahrenheit using two different formulas. The first formula (celsius * 1.8) + 32 and the second formula (celsius * 9/5) + 32. Both formulas are mathematically equivalent, but the program demonstrates two ways to achieve the conversion. After performing the conversion, the program displays the result with two decimal points precision using the print statement.`,
      },
      {
        id: "N36",
        name: "36. Python Program to convert Fahrenheit to Celsius.",
        code: `#taking input from the user
fahrenheit = float(input("Please give the Hahrenheit Temperature : "))
#converting Celsius into Fahrenheit
celsius = ((fahrenheit-32)*5)/9
print("Celcius= ",celsius)`,
        output: `Please give the Fahrenheit Temperature: 98.6
        Celsius =  37.0`,
        explanation: `The program prompts the user to input a temperature value in Fahrenheit. It then uses the formula Celsius = (Fahrenheit - 32) * 5/9 to convert the Fahrenheit temperature to Celsius. After performing the conversion, the program prints the resulting temperature in Celsius. The user input is taken as a floating-point number to allow for decimal values, and the result is printed out.`,
      },
      {
        id: "N37",
        name: "37. Python program to calculate Simple Interest with explanation.",
        code: `#taking the values of principal, rate of interest and time from the user
principal = int(input("Enter the principal amount: "))
rate = int(input("Enter the rate of interest: "))
time = int(input("Enter the time of interest in year: "))
#using the input values calculate simple interest
simpleInterest = (principal*rate*time)/100
print("Simple Interest = ",simpleInterest)`,
        output: `Enter the principal amount: 1000
Enter the rate of interest: 5
Enter the time of interest in year: 2
Simple Interest =  100.0`,
        explanation: `The program prompts the user to input three values: the principal amount, the rate of interest, and the time (in years). These values are used in the formula for Simple Interest, which is calculated as:

Simple Interest
=
Principal
×
Rate of Interest
×
Time
100
Simple Interest= 
100
Principal×Rate of Interest×Time
​
 
After calculating the simple interest using the formula, the program displays the result. The user inputs are treated as integers because they typically represent whole values (such as amounts and percentage rates).`,
      },





    ],
    Strings: [
      {
        id: "S1",
        name: "Reverse String",
        code: `
  string = "hello"
  print("Reversed string:", string[::-1])
        `,
        output: `Reversed string: olleh`,
        explanation: `This program reverses a string by using Python's slicing feature. The slice [::-1] reverses the string.`,
      },
      {
        id: "S2",
        name: "Palindrome Check",
        code: `
  def is_palindrome(s):
      return s == s[::-1]
  
  word = "madam"
  if is_palindrome(word):
      print("The string", word, "is a palindrome")
  else:
      print("The string", word, "is not a palindrome")
        `,
        output: `The string madam is a palindrome`,
        explanation: `This code takes an input from the user and stores it in the variable n. Then, it prints the original number n. After that, it initializes a variable reverse to 0 and uses a while loop to continuously add the last digit of n to reverse while also updating n to be the integer division of n by 10, until n becomes zero. Finally, it prints the reversed number.`,
      },
      {
        id: "S3",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S4",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S5",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S6",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S7",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S8",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S9",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S10",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S11",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S12",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S13",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S14",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S15",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S16",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S17",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S18",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S19",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S20",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S21",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S22",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S23",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S24",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S25",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
      {
        id: "S26",
        name: "",
        code: ``,
        output: ``,
        explanation: ``,
      },
    ],






    Arrays: [
        {
          id: "A1",
          name: "Reverse String",
          code: `
    string = "hello"
    print("Reversed string:", string[::-1])
          `,
          output: `Reversed string: olleh`,
          explanation: `This program reverses a string by using Python's slicing feature. The slice [::-1] reverses the string.`,
        },
        {
          id: "A2",
          name: "Palindrome Check",
          code: `
    def is_palindrome(s):
        return s == s[::-1]
    
    word = "madam"
    if is_palindrome(word):
        print("The string", word, "is a palindrome")
    else:
        print("The string", word, "is not a palindrome")
          `,
          output: `The string madam is a palindrome`,
          explanation: `This code takes an input from the user and stores it in the variable n. Then, it prints the original number n. After that, it initializes a variable reverse to 0 and uses a while loop to continuously add the last digit of n to reverse while also updating n to be the integer division of n by 10, until n becomes zero. Finally, it prints the reversed number.`,
        },
        {
            id: "A3",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A4",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A5",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A6",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A7",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A8",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A9",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A10",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A11",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A12",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A13",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A14",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A15",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A16",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A17",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A18",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A19",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A20",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A22",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A23",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A24",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A25",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "A26",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },

      ],





      LinkedList: [
        {
          id: "L1",
          name: "Reverse String",
          code: `
    string = "hello"
    print("Reversed string:", string[::-1])
          `,
          output: `Reversed string: olleh`,
          explanation: `This program reverses a string by using Python's slicing feature. The slice [::-1] reverses the string.`,
        },
        {
          id: "L2",
          name: "Palindrome Check",
          code: `
    def is_palindrome(s):
        return s == s[::-1]
    
    word = "madam"
    if is_palindrome(word):
        print("The string", word, "is a palindrome")
    else:
        print("The string", word, "is not a palindrome")
          `,
          output: `The string madam is a palindrome`,
          explanation: `This code takes an input from the user and stores it in the variable n. Then, it prints the original number n. After that, it initializes a variable reverse to 0 and uses a while loop to continuously add the last digit of n to reverse while also updating n to be the integer division of n by 10, until n becomes zero. Finally, it prints the reversed number.`,
        },
        {
            id: "L3",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "L4",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "L5",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "L6",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },
          {
            id: "L7",
            name: "",
            code: ``,
            output: ``,
            explanation: ``,
          },

      ],
  };
  