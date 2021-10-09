class SalonService{
    salones=[];

    constructor(){
        this.salones=[
            {
                "nombre": "Normal",
                "precio": 1000000,
                "extra_mesero": 150000,
                "cantidad_meseros": 1,
                "plato": 50000
            },
            {
                "nombre": "Grande",
                "precio": 2000000,
                "extra_mesero": 100000,
                "cantidad_meseros": 4,
                "plato": 40000
            }
        ];
    }

    obtenerTodos(){
        return this.salones;
    }
}export default new SalonService();