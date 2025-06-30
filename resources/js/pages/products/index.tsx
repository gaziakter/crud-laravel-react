import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">

                {/* Add Product button */}
                <div className='ml-auto'>
                <Link className='bg-indigo-500 px-6 py-4 rounded-lg text-white text-md cursor-pointer hover:opacity-90' as='button' href={route('products.create')}>Add New Product</Link>
                </div>

                <div className='overflow-hidden rounded-lg border bg-white shadow-sm'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-500 text-white'>
                            <th className='p-4 border'>#</th>
                            <th className='p-4 border'>Name</th>
                            <th className='p-4 border'>Description</th>
                            <th className='p-4 border'>Price</th>
                            <th className='p-4 border'>Feature Image</th>
                            <th className='p-4 border'>Created Date</th>
                            <th className='p-4 border'>Action</th>
                        </tr>
                    </thead>
                        <tr>
                            <td className='border px-4 py-2 text-center'></td>
      
                        </tr>
                    <tbody>

                    </tbody>
                </table>
                </div>
            </div>
        </AppLayout>
    );
}
