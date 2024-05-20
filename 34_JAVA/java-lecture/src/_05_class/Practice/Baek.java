package _05_class.Practice;

public class Baek extends Student2 {
    public Baek(String school, int age, int number) {
        super("백영희", school, age, number);
    }

    @Override
    void todo() {
        System.out.println("점심은 백종원 피자");
    }
}
