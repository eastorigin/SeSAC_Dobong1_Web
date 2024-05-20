package _05_class.Practice;

public class Cat extends Animal {
    public Cat(String name, int age) {
        super("고양이", name, age);
    }

    @Override
    void makeSound() {
        System.out.println("야옹");
    }

    public void catnip() {
        System.out.println(name + " 캣닙 냠냠");
    }
}
