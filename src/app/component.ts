
import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { NgForm } from "@angular/forms";
@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();
    getProduct(key: number): Product {
        return this.model.getProduct(key);
}
    getProducts(): Product[] {
        return this.model.getProducts();
}
    newProduct: Product = new Product();
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
}
    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
}

formSubmitted: boolean = false;
    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
}    

getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
        this.getValidationMessages(form.controls[k], k)
            .forEach(m => messages.push(m));
});
    return messages;
}

getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`А ${thing} кто будет вводить?`);
                        break;
                    case "minlength":
                        messages.push(`напрягись, в ${thing} хотя бы
                            ${state.errors['minlength'].requiredLength}
                            буковок`);
                            break;
    case "pattern":
        messages.push(`В ${thing} ты ввел какую-то дичь`);
break;
                }
            }
        }
        return messages;
    }
}