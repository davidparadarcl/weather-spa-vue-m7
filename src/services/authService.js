const usuarios = [
    {
        id: 1,
        nombre: "David",
        email: "david@test.com",
        password: "123456",
        favoritos: ["Villa Alemana", "Viña del Mar"],
        preferencias: {
            unidad: "°C",
        },
    },
    {
        id: 2,
        nombre: "Ana",
        email: "ana@test.com",
        password: "123456",
        favoritos: ["Santiago", "Valparaíso"],
        preferencias: {
            unidad: "°F",
        },
    },
];

export const loginUser = async (email, password) => {
    const usuario = usuarios.find(
        (u) => u.email === email && u.password === password,
    );

    if (!usuario) {
        throw new Error("Usuario o contraseña incorrectos");
    }

    return usuario;
};
