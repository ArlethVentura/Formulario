package ejemplo

class Persona {
    String nombre
    String email
    String nivel
    int semestre
    int matricula

    static constraints = {
        nombre size: 5..40, blank: false, unique: true
        email size: 7..25, blank: false, unique: true
        nivel size: 5.. 20, blank: false, unique: true
        semestre size: 1..2, blank: false, unique: true
        matricula size: 9, blank: false, unique: true
    }
    String toString(){
        nombre
    }
}
