interface KeyValue {[key: string]: string}

export class MockLocalStorage implements Storage {
    [name: string]: any;
    length: number = 0;

    clear(): void {
        this.items = new Array<KeyValue>();
        this.syncLength();
    }

    getItem(key: string): string | null {
        for (var i = 0; i < this.length; ++i)
            if (this.items[i]['key'] === key)
                return this.items[i]['value'];
        return null;
    }

    key(index: number): string | null {
        return this.items[index]['key'];
    }

    removeItem(key: string): void {
        for (var i = 0; i < this.length; ++i)
            if (this.items[i]['key'] === key)
                this.items.splice(i, 1);
        this.syncLength();
    }
    
    setItem(key: string, value: string): void {
        if (this.getItem(key))
            this.removeItem(key);
            
        this.items.push({key: key, value: value});
        this.syncLength();
    }

    syncLength(): void {
        this.length = this.items.length;
    }

    private items: Array<KeyValue> = [];
}
