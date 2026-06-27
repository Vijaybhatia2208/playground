


public class main {
    public static void main(String[] args) {
        System.out.println("hello");

        Student s1 = new Student("Vijay", (byte)20, 21331);

        Student s2 = new Student("Bhatia", (byte)-20, 12313);

        s1.setAge((byte)20);
        s2.setAge((byte)-20);

        s1.rollno = 21331;
        s2.rollno = 12313;

        s1.print();
        s2.print();
        
        Student s3 = new Student();
        s3.setValues(s1);
        s3.print();
    }


}
