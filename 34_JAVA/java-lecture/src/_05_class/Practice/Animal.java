package _05_class.Practice;

public class Animal {
    public String type;
    public String name;
    public int age;

    public Animal(String type, String name, int age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    void makeSound() {
        System.out.println("동물은 소리를 낸다");
    }
}
