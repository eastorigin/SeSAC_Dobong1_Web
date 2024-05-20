package _05_class.Practice;

public class Circle extends Shape {
    double radius;

    public Circle(String color, double radius) {
        super(color, "원");
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    double calculateArea() {
        return radius * radius * Math.PI;
    }
}
