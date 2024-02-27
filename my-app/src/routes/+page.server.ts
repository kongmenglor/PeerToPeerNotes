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
    const { data } = await supabase.schema('all_info').from('professors').select('*');
    return data;
}

async function getDeptData(){
    const { data } = await supabase.schema('all_info').from('departments').select('*');
    return data;
}

async function getNumData(){
    const { data } = await supabase.schema('all_info').from('class_numbers').select('*');
    return data;
}