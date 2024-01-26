export type Primitives = string | number | boolean;

export abstract class ValueObject<T extends Primitives> {
    constructor(readonly value: T) {
        this.value = value;
    }

    equals(other: ValueObject<T>): boolean {
        return this.constructor.name === other.constructor.name && this.value === other.value;
    }

    toString(): string {
        return this.value.toString();
    }
}
