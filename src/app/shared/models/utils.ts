function nonNullAssertionCheck(value: string | null  | undefined): string | null  | undefined {
  if(value !== undefined && value !== null){
    return value;
  }
  else if(value === undefined) {
    return undefined;
  }else{
    return null;
  }
}


export const utils = {
  nonNullAssertionCheck
}
