package _04_Exception;

public class Prac1 {
    public static void main(String[] args) {
        int[] intArray = {1, 2, 3, 4};
        for (int i = 0; i <= 4; i++) {
            try {
                System.out.println(intArray[i]);
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("인덱스가 범위를 벗어났습니다.");
            }
        }
    }
}
