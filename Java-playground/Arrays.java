public class Arrays {
  public static void main(String[] args){
    int a= 10, b =25;
    modify(a,b);
    System.out.println(a+" "+b);

    int[] arr ={1,2,3,4,5};
    arr_modify(arr);

    System.out.println(arr[0]);

  }

  // java always work by pass by value
  // array's are pass by reference 
  // intern pool/string pool it is part of heap
  public static void modify(int a, int b) {
    a=a+10;
    b=b+10;
  }

  public static void arr_modify(int[] arr) {
    arr[0] = 101231;
  }
}
