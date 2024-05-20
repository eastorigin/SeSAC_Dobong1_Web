package _05_class.Practice;

public abstract class Student2 {
    String name;
    String school;
    int age;
    int number;

    public Student2(String name, String school, int age, int number) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public String getSchool() {
        return school;
    }

    public int getAge() {
        return age;
    }

    public int getNumber() {
        return number;
    }

    abstract void todo();
}
