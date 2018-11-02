package palindromo;

import java.text.Normalizer;
import javax.swing.*;

public class Palindromo {

    public static void main(String[] args) {
        String input = JOptionPane.showInputDialog("Insira a frase para verificação: ");
        input = input.toLowerCase();
        String palindromo = "";
        int cont = 1;
        input = input.replace(" ", "");
//        Socorram-me, subi no ônibus em Marrocos
        input = Normalizer.normalize(input, Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "");
        input = Normalizer.normalize(input, Normalizer.Form.NFD).replaceAll("[-!\"#$%&'()*+,./:;<=>?@_`{|}~]", "");
        
        for (int i = 0; i < input.length(); i++) {
            palindromo = palindromo + input.charAt(input.length() - cont);
            cont++;
        }
        if (input.equalsIgnoreCase(palindromo)) {
            System.out.println("É UM PALÍNDROMO");
        } else {
            System.out.println("NÃO É UM PALÍNDROMO");
        }
        System.out.println("\n\n\n input: " + input);
        System.out.println("output: " + palindromo);
    }
}
