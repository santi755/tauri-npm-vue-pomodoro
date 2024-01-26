import { v4 as uuid } from 'uuid';
import { ValueObject } from './ValueObject';

export class Uuid extends ValueObject<string> {
    constructor(readonly value: string) {
        super(value);
    }

    static generate(): Uuid {
        return new Uuid(uuid());
    }

    getValue(): string {
        return this.value;
    }

    equals(other: ValueObject<string>): boolean {
        return this.value === other.value;
    }

    toString(): string {
        return this.value;
    }
}
