Data types and Ranges

- Circularity
- Promotion and demotion of data types

Non - Primitive data types

- Classes and objects
- Arrays - Pass by value
- String

Wrapper classes

- Function calling with non primitives
- Immutability

Why String is immutable

1. Intern/pool(pointing same value of multi var if value is same) -> save space
2. It makes string as thread safe

java always work by pass by value
array's are pass by reference
intern pool/string pool it is part of heap

```
 public static void main(String[] args) {
    String s1="Java";// using literal
    String s2="java";
    if (s1==s2) {
      System.out.println(true);
    }else {
      System.out.println(false);
    }

    String s3 = new String("javas");
    String s4 = new String("java");
    if (s3.equals(s4)) {
      System.out.println(true);
    }else {
      System.out.println(false);
    }

    if (s2.equals(s4)) {
      System.out.println(true);
    }else {
      System.out.println(false);
    }


  }
```

TO DO:
String buffer - API
String builder - API
