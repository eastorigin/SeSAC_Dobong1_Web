package _05_class.Practice;

public class Rectangle2 extends Shape {
    int width;
    int height;

    public Rectangle2(String color, int width, int height) {
        super(color, "사각형");
        this.width = width;
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    @Override
    double calculateArea() {
        return width * height;
    }
}
