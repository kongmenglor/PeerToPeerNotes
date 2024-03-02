// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { supabase } from '$lib/images/supabaseClient';

export async function load({params}) {

    const professors = await getProfData();
    const departments = await getDeptData();
    const class_numbers = await getNumData();
    return {
       props: {
        professors,
        departments,
        class_numbers
       }
    };

  }

async function getProfData(){
    let data_to_return : {label: string, value: string}[] = [];
    const { data } = await supabase.schema('all_info').from('professors').select('*');
    data?.forEach((element) => {
        let tempObj = {label: element.full_name, value: element.full_name};
        data_to_return.push(tempObj);
    })
    console.log(data_to_return);
    return data_to_return;
}

async function getDeptData(){
    let data_to_return : {label: string, value: string}[] = [];
    const { data } = await supabase.schema('all_info').from('departments').select('*');
    data?.forEach((element) => {
        let tempObj = {label: element.department, value: element.department};
        data_to_return.push(tempObj);
    })
    console.log(data_to_return);
    return data_to_return;
}

async function getNumData(){
    let data_to_return : {label: string, value: string}[] = [];
    const { data } = await supabase.schema('all_info').from('class_numbers').select('*');
    data?.forEach((element) => {
        let tempObj = {label: element.class_number, value: element.class_number};
        data_to_return.push(tempObj);
    })
    console.log(data_to_return);
    return data_to_return;
}