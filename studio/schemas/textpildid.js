export default {
    name: 'pildid',
    title: 'Pildid',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Pildi nimi',
            type: 'string',
            description: 'Pildi kirjeldus',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        }
    ]
}