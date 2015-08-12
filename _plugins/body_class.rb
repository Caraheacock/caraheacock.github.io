class BodyClassTag < Liquid::Tag
  def generate_body_class(prefix, id)
    id = id.gsub(/\.\w*?$/, '').gsub(/[-\/]/, '').gsub(/^_/, '')
    
    if prefix == 'url' && id == ''
      'home'
    else
      prefix + '-' + id
    end
  end

  def render(context)
    page = context.environments.first["page"]
    classes = []

    %w[url layout].each do |prop|
      next unless page.has_key?(prop)
      if page[prop].kind_of?(Array)
        page[prop].each { |proper| classes.push generate_body_class(prop, proper) }
      else
        classes.push generate_body_class(prop, page[prop])
      end
    end
    
    if page['url'] != '/'
      classes.push 'child-page'
    end

    classes.join(" ")
  end
end

Liquid::Template.register_tag('body_class', BodyClassTag)