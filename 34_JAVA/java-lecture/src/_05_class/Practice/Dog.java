package _05_class.Practice;

public class Dog extends Animal {
    public Dog(String name, int age) {
        super("강아지", name, age);
    }

    @Override
    void makeSound() {
        System.out.println("멍멍");
    }

    public void train() {
        System.out.println("마약 탐지견 " + name);
    }
}
