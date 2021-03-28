import { FormControl} from '@angular/forms'

export class HandleForm extends FormControl{

  setValue(value: string | null, options:any){

    if(this.value.length === 3 && value.length === 2 ){
      super.setValue(value , {...options, emitModelToViewChange:true})
      return;

    }

    if(value.length === 3 ){
      const newValue = value.split('')
      let val= ''
      for(let i=0; i<newValue.length-1;i++){
        val += newValue[i]
      }
      console.log(val)
      super.setValue(val , {...options, emitModelToViewChange:true})
      return;

    }

    if(value.length == 2){
      super.setValue(value + '/', {...options, emitModelToViewChange:true})
      return;

    }
    super.setValue(value , options)




  }
}
