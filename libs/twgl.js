class TWGL {
    getInfo() {
        return {
            id: "piripe0twgl",
            name: "TWGL (TurboWarp Graphics Library)",

            blocks: [
                {
                    opcode: "hello",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Hello, world!",
                },
            ],
        };
    }

    hello() {
        return "Hello, world!";
    }
}

Scratch.extensions.register(new TWGL());
