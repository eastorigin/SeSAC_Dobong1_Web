package _05_class.Practice;

public abstract class Shape {
    String color;
    String type;

    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    String getColor() {
        return this.color;
    }

    abstract double calculateArea();
}
