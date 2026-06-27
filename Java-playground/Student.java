

public class Student {
    String name;
    int rollno;
    private byte age;

    Student () {
        
    }

    Student(String n, byte a,int r) {
        age= a;
        rollno=r;
        name=n;
    }

    void print() {
        System.out.println(name+' '+age+ ' '+rollno);
        // System.out.println(name+' '+age+ ''+rollno);
    }

    public void setAge(byte a) {
        if (a < 1) {
            return ;
        }
        else {
            age = a;
        }

    }

    public void  setValues(Student s) {
        this.age = s.age;
        this.rollno = s.rollno;
        this.name = s.name;
    }

    public void setrollno (int r) {
        rollno = r;
    }
}   