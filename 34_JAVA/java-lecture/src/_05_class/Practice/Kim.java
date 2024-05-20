package _05_class.Practice;

public class Kim extends Student2 {
    public Kim(String school, int age, int number) {
        super("김철수", school, age, number);
    }

    @Override
    void todo() {
        System.out.println("점심은 김가네 김밥");
    }
}
