import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-10 md:grid-cols-2 xl:grid-cols-2 ">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-surface/40 backdrop-blur-lg p-10 border-2  border-surface shadow-lg hover:shadow-xl hover:shadow-secondary/50 transition-all hover:scale-105"
          >
            <div>
              <div className="text-center">
                <span className="icon text-3xl">
                <center><FeatherIcon size={48}/></center>
                </span>
                <h3 className=" text-sm md:text-3xl pt-5">{item.title}</h3>
              </div>
              <p className="text-2xl md:text-2xl text-center" dangerouslySetInnerHTML={{__html: markdownify(item.content)}}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
