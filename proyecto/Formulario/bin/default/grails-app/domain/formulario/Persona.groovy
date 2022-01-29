package formulario

class Persona {
 String nombre
    String email
    String nivel
    int semestre
    String matricula
    String carrera

    static constraints = {
        nombre size: 5..40, blank: false, unique: true
        email size: 7..25, blank: false, unique: true
        nivel size: 5.. 20, blank: false
        semestre size: 1..2, blank: false
        matricula size:8..9, blank: false, unique: true
        carrera size: 5..40, blank: false
    }

    String toString(){
        nombre
    }
}
