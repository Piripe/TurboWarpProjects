class AdvMath {
    getInfo() {
        return {
            id: "piripe0math",
            name: "Advanced Math",

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

Scratch.extensions.register(new AdvMath());
