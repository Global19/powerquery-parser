// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { expect } from "chai";
import "mocha";

import { Type, TypeUtils } from "../../../../powerquery-parser/language";

describe(`TypeUtils.nameOf`, () => {
    describe(`non extended`, () => {
        describe("non-nullable", () => {
            it(`${Type.AnyInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.AnyInstance)).to.equal("any");
            });
            it(`${Type.AnyNonNullInstance.kind}`, () => {
                // tslint:disable-next-line: chai-vague-errors
                expect(TypeUtils.nameOf(Type.AnyNonNullInstance)).to.equal("anynonnull");
            });
            it(`${Type.BinaryInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.BinaryInstance)).to.equal("binary");
            });
            it(`${Type.DateInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.DateInstance)).to.equal("date");
            });
            it(`${Type.DateTimeInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.DateTimeInstance)).to.equal("datetime");
            });
            it(`${Type.DateTimeZoneInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.DateTimeZoneInstance)).to.equal("datetimezone");
            });
            it(`${Type.DurationInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.DurationInstance)).to.equal("duration");
            });
            it(`${Type.FunctionInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.FunctionInstance)).to.equal("function");
            });
            it(`${Type.ListInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.ListInstance)).to.equal("list");
            });
            it(`${Type.LogicalInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.LogicalInstance)).to.equal("logical");
            });
            it(`${Type.NoneInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.NoneInstance)).to.equal("none");
            });
            it(`${Type.NullInstance.kind}`, () => {
                // tslint:disable-next-line: chai-vague-errors
                expect(TypeUtils.nameOf(Type.NullInstance)).to.equal("null");
            });
            it(`${Type.NumberInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.NumberInstance)).to.equal("number");
            });
            it(`${Type.RecordInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.RecordInstance)).to.equal("record");
            });
            it(`${Type.TableInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.TableInstance)).to.equal("table");
            });
            it(`${Type.TypePrimitiveInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.TypePrimitiveInstance)).to.equal("type");
            });

            it(`${Type.ActionInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.ActionInstance)).to.equal("action");
            });
            it(`${Type.TimeInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.TimeInstance)).to.equal("time");
            });

            it(`${Type.NotApplicableInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.NotApplicableInstance)).to.equal("not applicable");
            });
            it(`${Type.UnknownInstance.kind}`, () => {
                expect(TypeUtils.nameOf(Type.UnknownInstance)).to.equal("unknown");
            });
        });

        describe("nullable", () => {
            it(`${Type.NullableAnyInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableAnyInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable any");
            });
            // anynonnull can't be nullable
            it(`${Type.NullableBinaryInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableBinaryInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable binary");
            });
            it(`${Type.NullableDateInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableDateInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable date");
            });
            it(`${Type.NullableDateTimeInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableDateTimeInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable datetime");
            });
            it(`${Type.NullableDateTimeZoneInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableDateTimeZoneInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable datetimezone");
            });
            it(`${Type.NullableDurationInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableDurationInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable duration");
            });
            it(`${Type.NullableFunctionInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableFunctionInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable function");
            });
            it(`${Type.NullableListInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableListInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable list");
            });
            it(`${Type.NullableLogicalInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableLogicalInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable logical");
            });
            it(`${Type.NullableNoneInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableNoneInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable none");
            });
            it(`${Type.NullableNullInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableNullInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable null");
            });
            it(`${Type.NullableNumberInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableNumberInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable number");
            });
            it(`${Type.NullableRecordInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableRecordInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable record");
            });
            it(`${Type.NullableTableInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableTableInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable table");
            });
            it(`${Type.NullableTypeInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableTypeInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable type");
            });

            it(`${Type.NullableActionInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableActionInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable action");
            });
            it(`${Type.NullableTimeInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableTimeInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable time");
            });

            it(`${Type.NullableNotApplicableInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableNotApplicableInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable not applicable");
            });
            it(`${Type.NullableUnknownInstance.kind}`, () => {
                const actual: string = TypeUtils.nameOf(Type.NullableUnknownInstance);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal("nullable unknown");
            });
        });
    });

    describe(`extended`, () => {
        describe(`${Type.ExtendedTypeKind.AnyUnion}`, () => {
            it(`primitives`, () => {
                const type: Type.TType = TypeUtils.anyUnionFactory([Type.NumberInstance, Type.ListInstance]);
                expect(TypeUtils.nameOf(type)).to.equal(`number | list`);
            });
            it(`complex`, () => {
                const type: Type.TType = TypeUtils.anyUnionFactory([
                    TypeUtils.definedRecordFactory(false, new Map([["foo", Type.NumberInstance]]), false),
                    TypeUtils.definedListFactory(false, [Type.TextInstance]),
                    TypeUtils.definedTableFactory(false, new Map([["bar", Type.TextInstance]]), true),
                ]);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`[foo: number] | {text} | table [bar: text, ...]`);
            });
        });

        describe(`${Type.ExtendedTypeKind.DefinedFunction}`, () => {
            it(`() => any`, () => {
                const type: Type.DefinedFunction = TypeUtils.definedFunctionFactory(false, [], Type.AnyInstance);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`() => any`);
            });

            it(`() => nullable any`, () => {
                const type: Type.DefinedFunction = TypeUtils.definedFunctionFactory(
                    false,
                    [],
                    Type.NullableAnyInstance,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`() => nullable any`);
            });

            it(`(param1 as number, param2 as nullable number, optional param3 as number, optional param4 as nullable number) => any`, () => {
                const type: Type.DefinedFunction = TypeUtils.definedFunctionFactory(
                    false,
                    [
                        {
                            isNullable: false,
                            isOptional: false,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param1",
                        },
                        {
                            isNullable: true,
                            isOptional: false,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param2",
                        },
                        {
                            isNullable: false,
                            isOptional: true,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param3",
                        },
                        {
                            isNullable: true,
                            isOptional: true,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param4",
                        },
                    ],
                    Type.AnyInstance,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(
                    `(param1: number, param2: nullable number, param3: optional number, param4: optional nullable number) => any`,
                );
            });
        });

        describe(`${Type.ExtendedTypeKind.DefinedList}`, () => {
            it(`{}`, () => {
                const type: Type.DefinedList = TypeUtils.definedListFactory(false, []);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`{}`);
            });

            it(`nullable {}`, () => {
                const type: Type.DefinedList = TypeUtils.definedListFactory(true, []);
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`nullable {}`);
            });

            it(`{number, nullable text}`, () => {
                const type: Type.DefinedList = TypeUtils.definedListFactory(false, [
                    Type.NumberInstance,
                    Type.NullableTextInstance,
                ]);
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`{number, nullable text}`);
            });
        });

        describe(`${Type.ExtendedTypeKind.DefinedListType}`, () => {
            it(`type {}`, () => {
                const type: Type.DefinedListType = TypeUtils.definedListTypeFactory(false, []);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type {}`);
            });

            it(`nullable type {}`, () => {
                const type: Type.DefinedListType = TypeUtils.definedListTypeFactory(true, []);
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`nullable type {}`);
            });

            it(`type {number, nullable text}`, () => {
                const type: Type.DefinedListType = TypeUtils.definedListTypeFactory(false, [
                    Type.NumberInstance,
                    Type.NullableTextInstance,
                ]);
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`type {number, nullable text}`);
            });
        });

        describe(`${Type.ExtendedTypeKind.DefinedRecord}`, () => {
            it(`[]`, () => {
                const type: Type.DefinedRecord = TypeUtils.definedRecordFactory(false, new Map(), false);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`[]`);
            });

            it(`[...]`, () => {
                const type: Type.DefinedRecord = TypeUtils.definedRecordFactory(false, new Map(), true);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`[...]`);
            });

            it(`[foo = number, bar = nullable text]`, () => {
                const type: Type.DefinedRecord = TypeUtils.definedRecordFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    false,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`[foo: number, bar: nullable text]`);
            });

            it(`[foo = number, bar = nullable text, ...]`, () => {
                const type: Type.DefinedRecord = TypeUtils.definedRecordFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    true,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`[foo: number, bar: nullable text, ...]`);
            });
        });

        describe(`${Type.ExtendedTypeKind.DefinedTable}`, () => {
            it(`table []`, () => {
                const type: Type.DefinedTable = TypeUtils.definedTableFactory(false, new Map(), false);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`table []`);
            });

            it(`table [...]`, () => {
                const type: Type.DefinedTable = TypeUtils.definedTableFactory(false, new Map(), true);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`table [...]`);
            });

            it(`table [foo = number, bar = nullable text]`, () => {
                const type: Type.DefinedTable = TypeUtils.definedTableFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    false,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`table [foo: number, bar: nullable text]`);
            });

            it(`table [foo = number, bar = nullable text, ...]`, () => {
                const type: Type.DefinedTable = TypeUtils.definedTableFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    true,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`table [foo: number, bar: nullable text, ...]`);
            });
        });

        describe(`${Type.ExtendedTypeKind.FunctionType}`, () => {
            it(`type function () any`, () => {
                const type: Type.FunctionType = TypeUtils.functionTypeFactory(false, [], Type.AnyInstance);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type function () any`);
            });

            it(`type function () any`, () => {
                const type: Type.FunctionType = TypeUtils.functionTypeFactory(
                    false,
                    [
                        {
                            isNullable: false,
                            isOptional: false,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param1",
                        },
                        {
                            isNullable: true,
                            isOptional: false,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param2",
                        },
                        {
                            isNullable: false,
                            isOptional: true,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param3",
                        },
                        {
                            isNullable: true,
                            isOptional: true,
                            maybeType: Type.TypeKind.Number,
                            nameLiteral: "param4",
                        },
                    ],
                    Type.AnyInstance,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(
                    `type function (param1: number, param2: nullable number, param3: optional number, param4: optional nullable number) any`,
                );
            });
        });

        describe(`${Type.ExtendedTypeKind.ListType}`, () => {
            it(`type {text}`, () => {
                const type: Type.ListType = TypeUtils.listTypeFactory(false, Type.TextInstance);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type {text}`);
            });
        });

        describe(`${Type.ExtendedTypeKind.PrimaryPrimitiveType}`, () => {
            it(`type text`, () => {
                const type: Type.PrimaryPrimitiveType = TypeUtils.primaryPrimitiveTypeFactory(false, Type.TextInstance);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type text`);
            });
        });

        describe(`${Type.ExtendedTypeKind.RecordType}`, () => {
            it(`type [foo = number]`, () => {
                const type: Type.RecordType = TypeUtils.recordTypeFactory(
                    false,
                    new Map([["foo", Type.NumberInstance]]),
                    false,
                );
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type [foo: number]`);
            });

            it(`type [...]`, () => {
                const type: Type.RecordType = TypeUtils.recordTypeFactory(false, new Map(), true);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type [...]`);
            });

            it(`type [foo = number, bar = nullable text]`, () => {
                const type: Type.RecordType = TypeUtils.recordTypeFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    false,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`type [foo: number, bar: nullable text]`);
            });

            it(`type [foo = number, bar = nullable text, ...]`, () => {
                const type: Type.RecordType = TypeUtils.recordTypeFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    true,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`type [foo: number, bar: nullable text, ...]`);
            });
        });

        describe(`${Type.ExtendedTypeKind.TableType}`, () => {
            it(`type table [foo = number]`, () => {
                const type: Type.TableType = TypeUtils.tableTypeFactory(
                    false,
                    new Map([["foo", Type.NumberInstance]]),
                    false,
                );
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type table [foo: number]`);
            });

            it(`type table [...]`, () => {
                const type: Type.TableType = TypeUtils.tableTypeFactory(false, new Map(), true);
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type table [...]`);
            });

            it(`type table [foo = number, bar = nullable text]`, () => {
                const type: Type.TableType = TypeUtils.tableTypeFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    false,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`type table [foo: number, bar: nullable text]`);
            });

            it(`type table [foo = number, bar = nullable text, ...]`, () => {
                const type: Type.TableType = TypeUtils.tableTypeFactory(
                    false,
                    new Map<string, Type.TType>([
                        ["foo", Type.NumberInstance],
                        ["bar", Type.NullableTextInstance],
                    ]),
                    true,
                );
                const actual: string = TypeUtils.nameOf(type);
                // tslint:disable-next-line: chai-vague-errors
                expect(actual).to.equal(`type table [foo: number, bar: nullable text, ...]`);
            });
        });

        describe(`${Type.ExtendedTypeKind.TableTypePrimaryExpression}`, () => {
            // Assumes `foo` is text.
            it(`type table foo`, () => {
                const type: Type.TableTypePrimaryExpression = TypeUtils.tableTypePrimaryExpression(
                    false,
                    Type.TextInstance,
                );
                const actual: string = TypeUtils.nameOf(type);
                expect(actual).to.equal(`type table text`);
            });
        });
    });
});