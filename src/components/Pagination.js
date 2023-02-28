// https://blog.logrocket.com/add-pagination-next-js-app/

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div>
            <ul class="inline-flex items-center -space-x-px mt-10">
                {pages.map((page) => (
                    <li>
                        <a href="#" onClick={() => onPageChange(page)} class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;