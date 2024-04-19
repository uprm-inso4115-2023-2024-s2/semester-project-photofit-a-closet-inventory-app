function removeNumbersFromEnum(enumClass: any): string[] {
    return Object.keys(enumClass)
        .filter((item) => {
            return isNaN(Number(item));
        });
}