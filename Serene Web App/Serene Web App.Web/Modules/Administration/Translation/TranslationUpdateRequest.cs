using Serenity.Services;
using System.Collections.Generic;

namespace Serene_Web_App.Administration
{

    public class TranslationUpdateRequest : ServiceRequest
    {
        public string TargetLanguageID { get; set; }
        public Dictionary<string, string> Translations { get; set; }
    }
}