<?php

// Archivo de conexión a la base de datos (conexion.php)
$host = 'localhost';
$dbname = 'nombre_basedatos';
$usuario = 'usuario';
$contrasena = 'contrasena';

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $contrasena);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo 'Error de conexión: ' . $e->getMessage();
    exit;
}

// Clase Medida
class Medida {
    public $id;
    public $medida;

    public function __construct($id, $medida) {
        $this->id = $id;
        $this->medida = $medida;
    }
}

// Clase Componente
class Componente {
    public $id;
    public $componente;

    public function __construct($id, $componente) {
        $this->id = $id;
        $this->componente = $componente;
    }
}

// Clase Receta
class Receta {
    public $id;
    public $nombre;
    public $descripcion;
    public $tiempo;
    public $porciones;

    public function __construct($id, $nombre, $descripcion, $tiempo, $porciones) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->tiempo = $tiempo;
        $this->porciones = $porciones;
    }
}

// Clase Ingrediente
class Ingrediente {
    public $id;
    public $receta_id;
    public $componente_id;
    public $cantidad;
    public $medida_id;
    public $ingrediente;

    public function __construct($id, $receta_id, $componente_id, $cantidad, $medida_id, $ingrediente) {
        $this->id = $id;
        $this->receta_id = $receta_id;
        $this->componente_id = $componente_id;
        $this->cantidad = $cantidad;
        $this->medida_id = $medida_id;
        $this->ingrediente = $ingrediente;
    }
}

// Clase Paso
class Paso {
    public $id;
    public $receta_id;
    public $numero;
    public $descripcion;

    public function __construct($id, $receta_id, $numero, $descripcion) {
        $this->id = $id;
        $this->receta_id = $receta_id;
        $this->numero = $numero;
        $this->descripcion = $descripcion;
    }
}

?>
