package _05_class.Practice;

public class Student2Ex {
    public static void main(String[] args) {
        Kim kim = new Kim("ABC 고등학교", 17, 20220001);
        Baek baek = new Baek("XYZ 고등학교", 18, 20220002);

        System.out.println("==== " + kim.getName() + " 학생의 정보 ====");
        System.out.println("학교: " + kim.getSchool());
        System.out.println("학번: " + kim.getNumber());
        kim.todo();

        System.out.println("==== " + baek.getName() + " 학생의 정보 ====");
        System.out.println("학교: " + baek.getSchool());
        System.out.println("나이: " + baek.getAge());
        System.out.println("학번: " + baek.getNumber());
        baek.todo();
    }
}
