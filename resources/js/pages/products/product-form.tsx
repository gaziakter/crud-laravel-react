import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomTextarea from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react'; // Added Link import here



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Products',
        href: route('products.create'),
    },
];

export default function ProductForm() {

    const {data, setData, post, processing, errors, reset,} = useForm({
        name: '',
        description: '',
        price: '',
        featured_image: null as File | null,
    });

    {/* Form Submit Handler */}
    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('products.store'), {
            onSuccess: () => console.log('Form Submited'),
        })
        console.log('data', data);
    }

    {/* File Handler */}
    const handleFileUpLoad = (e:React.FormEvent<HTMLFormElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            setData('featured_image', e.target.files[0]);
        }
    }



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">

                {/* Back to Product Button*/}
                <div className='ml-auto'>
                    <Link as='button' className='w-fit bg-indigo-500 px-6 py-4 rounded-lg text-white text-md cursor-pointer hover:opacity-90' href={route('products.index')}>Back to Products</Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Create Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className='flex flex-col  gap-4' autoComplete='off'>
                            <div className='grid gap-6'>

                                {/* Product Name*/}
                                <div className='grid gap-2'>
                                    <Label htmlFor='name'>Product Name</Label>
                                    <Input value={data.name} onChange={(e) => setData('name', e.target.value)} id='name' name='name' type='text' placeholder='Product Name' autoFocus tabIndex={1}></Input>
                                    <InputError message={errors.name}></InputError>
                                </div>

                                {/* Product Description */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='description'>Description</Label>
                                    <CustomTextarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={4} id='description' name='description' placeholder='Product description' autoFocus tabIndex={2}></CustomTextarea>
                                     <InputError message={errors.description}></InputError>

                                </div>

                                {/* Product Price */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='price'>Product Price</Label>
                                    <Input value={data.price} onChange={(e) => setData('price', e.target.value)} id='price' name='price' type='text' placeholder='Price' autoFocus tabIndex={3}></Input>
                                     <InputError message={errors.price}></InputError>

                                </div>

                                {/*  Featured Image */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='featured_image'>Featured Image</Label>
                                    <Input onChange={handleFileUpLoad} id='featured_image' name='featured_image' type='file' autoFocus tabIndex={4}></Input>
                                     <InputError message={errors.featured_image}></InputError>

                                </div>

                                {/*  Submit Button */}
                                <Button type="submit" className="mt-4 w-fit cursor-pointer" tabIndex={4}>
                                    {/* {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} */}
                                    Save Product
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}