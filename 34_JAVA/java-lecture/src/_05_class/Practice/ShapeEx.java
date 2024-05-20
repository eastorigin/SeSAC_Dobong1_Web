package _05_class.Practice;

import java.util.ArrayList;

public class ShapeEx {
    public static void main(String[] args) {
        ArrayList<Shape> shapes = new ArrayList<>();
        Circle circle = new Circle("Red", 5);
        shapes.add(circle);
        Rectangle2 rectangle2 = new Rectangle2("Blue", 8, 3);
        shapes.add(rectangle2);

        for (Shape shape : shapes) {
            System.out.println("=== " + shape.type + " 도형의 정보 ===");
            System.out.println("도형의 색상: " + shape.color);
            System.out.println("도형의 넓이: " + shape.calculateArea());
        }
    }
}
