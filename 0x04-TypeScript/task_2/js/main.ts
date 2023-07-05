interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks() : string
}


interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks() : string
}


export class Director implements DirectorInterface {

    workFromHome(): string {
        return "Working from home";
    }

    getToWork() : string {
        return "Getting a coffee break";
    }

    workDirectorTasks() : string {
        return "Getting to director tasks";
    }

    getCoffeeBreak(): string {
        return '';
    }
}


export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }

    workDirectorTasks(): string {
        return "";
    }
}

export const createEmployee = (salary: string | number) : Director | Teacher =>{
    if(typeof salary === 'number' && salary < 500) {
        return new Teacher;
    } 
    
    return new Director;
}


export const isDirector = (employee:TeacherInterface | DirectorInterface) : employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}


export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}

type Subjects = 'Maths' | 'History';

const teachClass = (todayClass: Subjects): string => {
    if(todayClass === 'Maths') {
        return "Teaching Math";
    } else if(todayClass === 'History') {
        return "Teaching History";
    }
}

