module.exports = {
    siteMetadata: {
        title: 'Canastro\'s notes',
        author: 'Ricardo Canastro',
        description:
            'Software development (mainly javascript) blog written by Ricardo Canastro a Software Developer based in Porto, Portugal and currently working for dashdash.',
        siteUrl: 'https://canastro.github.io/blog/',
        social: {
            twitter: '//www.twitter.com/canastro',
            stackoverflow: '//stackoverflow.com/users/236205/canastro',
            linkedin: '//www.linkedin.com/in/ricardocanastro'
        },
        keywords: ['blog', 'gatsby', 'javascript', 'react', 'canastro', 'typescript']
    },
    pathPrefix: '/blog',
    plugins: [
        'gatsby-plugin-robots-txt',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-110924562-1',
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    'gatsby-plugin-glamor',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-emojis',
                        options: {
                            // Deactivate the plugin globally (default: true)
                            active: true,
                            // Add a custom css class
                            class: 'emoji-icon',
                            // Select the size (available size: 16, 24, 32, 64)
                            size: 64,
                            // Add custom styles
                            styles: {
                                display: 'inline',
                                margin: '0',
                                'margin-top': '1px',
                                position: 'relative',
                                top: '5px',
                                width: '25px'
                            }
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Canastro notes',
                short_name: 'Canastro',
                start_url: '/blog',
                background_color: 'white',
                theme_color: 'white',
                display: 'minimal-ui',
                icon: 'content/assets/canastro-icon.png'
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ]
};
