
/*
Why String is immutable
1. Intern/pool(pointing same value of multi var if value is same)   -> save space 
2. It makes string as thread safe 

TO DO: 
String buffer - API
String builder - API
*/

public class Strings {
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
}
