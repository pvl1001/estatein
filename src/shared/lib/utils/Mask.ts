export class Mask {
    static phone(value: string): string {
        return value
            .replace(/\D/g, '')
            .replace(/[78]|(\d)/, '+7 ($1')
            .replace(/(\d{3})(\d)/, '$1) $2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/-(\d{2})(\d)/, '-$1-$2')
    }
}
