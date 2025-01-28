interface Table {
    render(): void;
}

class PDFTable implements Table {
    render(): void {
        console.log("PDF table created.");
    }
}

class CSVTable implements Table {
    render(): void {
        console.log("CSV table created.");
    }
}

class HTMLTable implements Table {
    render(): void {
        console.log("HTML table created.")
    }
}

interface Chart {
    render(): void;
}

class PDFChart implements Chart {
    render(): void {
        console.log("PDF chart created.");
    }
}

class CSVChart implements Chart {
    render(): void {
        console.log("CSV chart created.");
    }
}

class HTMLChart implements Chart {
    render(): void {
        console.log("HTML chart created.")
    }
}

interface ReportFactory {
    createTable(): Table;
    createChart(): Chart;
}

class PDFReportFactory implements ReportFactory {
    createTable(): Table {
        return new PDFTable();
    }

    createChart(): Chart {
        return new PDFChart();
    }
}

class CSVReportFactory implements ReportFactory {
    createTable(): Table {
        return new CSVTable();
    }

    createChart(): Chart {
        return new CSVChart();
    }
}

class HTMLReportFactory implements ReportFactory {
    createTable(): Table {
        return new HTMLTable();
    }

    createChart(): Chart {
        return new HTMLChart();
    }
}

class Client {
    private factory: ReportFactory;

    constructor(factory: ReportFactory) {
        this.factory = factory;
    }

    create(): void {
        this.factory.createTable().render();
        this.factory.createChart().render();
    }
}

const pdfFactory = new PDFReportFactory();
const client1 = new Client(pdfFactory);
client1.create();

const csvFactory = new CSVReportFactory();
const client2 = new Client(csvFactory);
client2.create();

const htmlFactory = new HTMLReportFactory();
const client3 = new Client(htmlFactory);
client3.create();