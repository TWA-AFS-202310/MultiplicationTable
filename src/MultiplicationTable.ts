export class MultiplicationTable {
  public create(start : number, end: number) : string {
   if (!this.isValid(start, end)) {
     return "Invalid input. Please check the start and end numbers.";
   }
  
   const table = this.generateTable(start, end);
   return table;
  }
  
  private isValid(start : number, end : number) : Boolean {
   return this.isInRange(start) && this.isInRange(end) && this.isStartNoBiggerThanEnd(start, end);
  }
  
  private isInRange(num : number) : Boolean {
   return num >= 1 && num <= 1000;
  }
  
  private isStartNoBiggerThanEnd(start : number, end : number) : Boolean {
   return start <= end;
  }
  
  private generateTable(start : number, end: number) : string {
   const rows = [];
   for (let i = start; i <= end; i++) {
     const row = this.generateLine(start, i);
     rows.push(row);
   }
   return rows.join('\n');
  }
  
  private generateLine(start : number, row : number) : string {
   const expressions = [];
   for (let j = start; j <= row; j++) {
     const expression = this.generateSingleExpression(j, row);
     expressions.push(expression);
   }
   return expressions.join('\t');
  }
  
  private generateSingleExpression(multiplicand : number, multiplier : number) : string {
   const product = multiplicand * multiplier;
   return `${multiplicand} * ${multiplier} = ${product}`;
  }
}
